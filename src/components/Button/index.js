import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disable = false,
    small = false,
    large = false,
    children,
    classNames,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [classNames]: classNames,
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
    });
    return (
        <Comp classNames={classes} {...props}>
            {leftIcon && <span className={cx('icon')}></span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}></span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
