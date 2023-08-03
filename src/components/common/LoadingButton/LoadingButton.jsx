import './LoadingButton.css';

function LoadingButton({onChange}) {
  return (
    <div className='loading-button'>
      <button className='loading-button__element' type='button' onClick={onChange}>
        Еще
      </button>
    </div>
  );
}

export default LoadingButton;
