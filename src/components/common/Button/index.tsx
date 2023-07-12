import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

const Button: React.FC<IProps> = ({ variant, children, className, ...props }) => {
    return (
        <button
            className={cn(
                styles.button,
                {
                    [styles.primary]: variant === 'primary',
                    [styles.secondary]: variant === 'secondary',
                    [styles.link]: variant === 'link',
                },
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
