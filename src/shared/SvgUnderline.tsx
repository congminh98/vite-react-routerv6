import React from 'react'

type Props = {}

export default function SvgUnderline(props: any) {
  const { color } = props;
  return (
    <>
      <div className={`${!!color ? color :''} underline-icon`}>
        <svg width="148" height="17" viewBox="0 0 148 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M67.2226 1.0336L66.9971 0.796903L58.9102 8.50144L67.2225 16.4187L75.537 8.50144L67.448 0.796875L67.2226 1.0336ZM67.2226 1.48511L59.8581 8.50138L67.2226 15.5158L74.5889 8.50138L67.2226 1.48511Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M73.1998 1.03377L72.9745 0.796889L64.874 8.50161L73.1998 16.4185L81.5266 8.50161L73.4251 0.796875L73.1998 1.03377ZM73.1998 1.48495L65.8228 8.50155L73.1998 15.5163L80.5777 8.50155L73.1998 1.48495Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M72.8075 8.50138L80.1738 15.5158L87.5392 8.50138L80.1738 1.4851L72.8075 8.50138ZM80.1738 1.0336L79.9483 0.796875L71.8594 8.50144L80.1738 16.4187L88.4872 8.50144L80.3993 0.796889L80.1738 1.0336Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M0 8.6462V9.26953H54.2573V8.6462H0Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M93.2822 8.6462V9.26953H147.54V8.6462H93.2822Z" fill="currentColor"></path></svg>
      </div>
    </>
  )
}
