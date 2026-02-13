export function Button({ children, onClick, variant = 'primary', size = 'medium', disabled = false, ...props }) {
  const className = `staar-button ${
    variant === 'secondary' ? 'staar-button-secondary' : ''
  } ${
    size === 'large' ? 'staar-button-large' : ''
  }`;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
