import React from 'react';
import './button.css';
import styled from "styled-components";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <div {...props}>
      {((size) => {
        switch(size){
          case 'small':
              return <SmallButton primary={primary}>{label}</SmallButton>;
          case 'medium':
              return <MediumButton primary={primary}>{label}</MediumButton>;
          case 'large':
              return <LargeButton primary={primary}>{label}</LargeButton>;
        }
      })(size)}
    </div>
  );
};

const ButtonMain = styled.button<{ primary: boolean}>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${(props) => props.primary ? "white" : "#333"};
  background-color: ${({primary}) => primary ? "#1ea7fd" : "transparent"};
  box-shadow: ${({primary}) => primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
`;

const SmallButton = styled(ButtonMain)`
  font-size: 12px;
  padding: 10px 16px;
`;

const MediumButton = styled(ButtonMain)`
  font-size: 14px;
  padding: 11px 20px;
`;

const LargeButton = styled(ButtonMain)`
  font-size: 16px;
  padding: 12px 24px;
`;

