'use client';

import {useState, type ComponentProps} from 'react';

export default function PasswordInput(props: ComponentProps<'input'>) {
  const [visible, setVisible] = useState(false);
  return (
    <span className="password-field">
      <input {...props} type={visible ? 'text' : 'password'} />
      <button
        className="password-toggle"
        type="button"
        onClick={() => setVisible(value => !value)}
        aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
        title={visible ? 'Ocultar senha' : 'Mostrar senha'}
      >
        {visible ? '◉' : '◎'}
      </button>
    </span>
  );
}
