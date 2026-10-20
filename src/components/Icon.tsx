// One consistent line-icon set: 24px grid, round caps, drawn in currentColor.
const paths={
 'arrow-right':<path d="M5 12h14M13 6l6 6-6 6"/>,
 'arrow-left':<path d="M19 12H5M11 6l-6 6 6 6"/>,
 'arrow-up':<path d="M12 19V5M6 11l6-6 6 6"/>,
 'arrow-down':<path d="M12 5v14M6 13l6 6 6-6"/>,
 external:<path d="M7 17 17 7M8.5 7H17v8.5"/>,
 check:<path d="m5 12.5 4.5 4.5L19 7.5"/>,
 search:<><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></>,
 star:<path className="icon-fill" d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>,
};
export type IconName=keyof typeof paths;
export function Icon({name,className=''}:{name:IconName;className?:string}){
 return <svg className={`icon icon-${name} ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
