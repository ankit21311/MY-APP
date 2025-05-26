export default function Toggle({ 
  enabled, 
  onChange, 
  label,
  labelPosition = 'right'
}) {
  return (
    <div className="flex items-center">
      {labelPosition === 'left' && label && (
        <span className="mr-3 text-sm font-medium text-gray-700">{label}</span>
      )}
      <button
        type="button"
        className={`${
          enabled ? 'bg-primary' : 'bg-gray-200'
        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
      >
        <span
          className={`${
            enabled ? 'translate-x-5' : 'translate-x-0'
          } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
        ></span>
      </button>
      {labelPosition === 'right' && label && (
        <span className="ml-3 text-sm font-medium text-gray-700">{label}</span>
      )}
    </div>
  );
}