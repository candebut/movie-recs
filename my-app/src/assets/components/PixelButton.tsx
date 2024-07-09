'use client';

const PixelButton = (props: { children: any; onClick: () => void }) => {
  return (
    <div className='pixel_button' onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default PixelButton;
