const AirConditionsInfo = ({ icon, label, value, visible }) => (
  <div className="flex items-center gap-3 transition-colors duration-300">
    <div className="dark:text-blue-400 text-2xl text-blue-400">{icon}</div>
    <div>
      <p className="text-md text-slate-500 dark:text-slate-400 transition-colors duration-300">
        {label}
      </p>
      <p className="font-semibold text-xl ">{visible ? value : "--"}</p>
    </div>
  </div>
);
export default AirConditionsInfo;
