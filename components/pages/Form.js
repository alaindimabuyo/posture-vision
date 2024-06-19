// components/FormComponent.jsx

import { useEffect } from 'react';

const FormComponent = () => {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/T6VeW1zDde4te4M2SLTh"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '3px',
        }}
        id="inline-T6VeW1zDde4te4M2SLTh"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 2"
        data-height="669"
        data-layout-iframe-id="inline-T6VeW1zDde4te4M2SLTh"
        data-form-id="T6VeW1zDde4te4M2SLTh"
        title="Form 2"
      />
    </div>
  );
};

export default FormComponent;
