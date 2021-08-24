import React, { memo, useCallback, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

interface Props {
  type: 'default' | 'disabled' | 'readonly';
}

interface FormInputs {
  default: string;
  readonly: string;
  disabled: string;
}

interface TextAreaProps {
  show: boolean;
}

export const InputTextArea = memo<Props>(({ type }) => {

  const [show, setShow] = useState(false);
  const [defaultFormValue, setDefaultFormValue] = useState<string | undefined>(undefined);
  const [strLength, setStrLength] = useState(500);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

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

  const handleChange = useCallback((type: string, e: any) => {
    const {value} = e.target;
    if (type === 'default') {
      handleStrLength(value);
      setShow(true);
    }
  }, [handleStrLength]);

  const onSubmit = (data: FormInputs) => {
    console.log('onSubmit', JSON.stringify(data));
  };

  useEffect(() => {
    if (type === 'readonly') {
      setDefaultFormValue('읽기 전용 입니다. 읽기 전용 입니다.');
    }
  }, [type]);

  useEffect(() => {
    if (defaultFormValue) {
      handleStrLength(defaultFormValue);
    }
  }, [defaultFormValue]);

  useEffect(() => {
    if (type === 'default' && show && strLength === 500) {
      setShow(false);
    }
  }, [show, strLength, type]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextAreaContainer show={show}>
          <label htmlFor={type}>{renderLabel(type)}</label>
          <TextAreaWrap>
            <TextAreaBox show={show}>
            <textarea
              {...register(`${ type }`)}
              aria-label={renderLabel(type)}
              name={type}
              onChange={e => {handleChange(type, e)}}
              placeholder="리뷰를 작성해주세요."
              readOnly={type === 'readonly'}
              disabled={type === 'disabled'}
              defaultValue={defaultFormValue}
              maxLength={500}
            />
              <TextLength>{strLength}</TextLength>
            </TextAreaBox>
            {type === 'default' && show && <input type="submit" className="btn-submit" value="Save" aria-label="저장하기" />}
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
    cursor: pointer;
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