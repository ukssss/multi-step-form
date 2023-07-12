import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const Box: React.FC<IProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(styles.box, className)} {...props}>
            {children}
        </div>
    );
};

export default Box;
