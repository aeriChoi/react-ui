import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  type: 'default' | 'disabled' | 'readonly';
}

interface TextAreaProps {
  show: boolean;
  disabled?: boolean;
}

export const InputTextArea = memo<Props>(({ type }) => {

  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formValue, setFormValue] = useState<string | undefined>(undefined);
  const [strLength, setStrLength] = useState(500);

  const renderLabel = useCallback((type: string) => {
    switch (type) {
      case 'readonly':
        return '읽기 전용';
      case 'disabled':
        return '비활성화';
      default:
        return '리뷰 작성';
    }
  }, []);

  const handleStrLength = useCallback((value: string) => {
    const str = value;
    const strLeng = 500 - str.length;
    setStrLength(strLeng);

    if (type === 'default' && str.length === 0) {
      setStrLength(500);
    }
  }, [strLength, type]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.currentTarget;
    if (type === 'default' && !disabled) {
      handleStrLength(value);
      setFormValue(value);
      setShow(true);
    }
    if (type === 'default' && disabled) {
      handleStrLength(value);
      setFormValue(value);
      setDisabled(false);
    }
  }, [type, disabled, handleStrLength]);

  const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handleOnSubmit', e.currentTarget.review.value);
  }, []);

  useEffect(() => {
    if (type === 'readonly' && formValue === undefined) {
      setFormValue('읽기 전용 입니다. 읽기 전용 입니다.');
    }
  }, [type, formValue]);

  useEffect(() => {
    if (type === 'readonly' && formValue) {
      handleStrLength(formValue);
    }
  }, [formValue]);

  useEffect(() => {
    if (type === 'default' && formValue && !show && !disabled) {
      handleStrLength(formValue);
      setDisabled(true);
      setShow(true);
    }
  }, [type, formValue]);

  useEffect(() => {
    if (type === 'default' && show && strLength === 500) {
      setShow(false);
    }
  }, [show, strLength, type]);

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <TextAreaContainer show={show} disabled={disabled}>
          <label htmlFor={type}>{renderLabel(type)}</label>
          <TextAreaWrap>
            <TextAreaBox show={show}>
            <textarea
              aria-label={renderLabel(type)}
              name="review"
              onChange={handleChange}
              placeholder="리뷰를 작성해주세요."
              readOnly={type === 'readonly'}
              disabled={type === 'disabled'}
              value={formValue}
              maxLength={500}
             />
              <TextLength>{strLength}</TextLength>
            </TextAreaBox>
            {type === 'default' && show && <input type="submit" className="btn-submit" value="Save" aria-label="저장하기" disabled={disabled} />}
          </TextAreaWrap>
        </TextAreaContainer>
      </form>
    </>
  );
});

const TextAreaContainer = styled.div<TextAreaProps>`
  width: 100%;
  height: 100%;
  
  label {
    display: block;
    margin: 20px 0;
    font-size: 16px;
    font-weight: bold;
  }
  
  .btn-submit {
    width: ${props => (props.show ? '100px' : '0')};
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: ${props => (props.disabled ? '#d9d9d9' : '#fff')};
    color: ${props => (props.disabled ? '#727272' : 'dodgerblue')};
    font-weight: 600;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: 0.5s;
  }
`;

const TextAreaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TextAreaBox = styled.div<TextAreaProps>`
  position: relative;
  justify-content: space-between;
  width: ${props => (props.show ? 'calc(100% - 120px)' : '100%')};
  height: 100%;
  
  textarea {
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    font-size: 16px;
    resize: none;
    transition: 0.5s;
    
    &:focus-visible {
      outline: none;
    }
  }
`;

const TextLength = styled.span`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  color: #afafaf;
  font-size: 16px;
  transition: 0.2s;
`;