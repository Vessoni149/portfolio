import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink, videoDemoLink }) {
  return (
    <article className="w-100 rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 flex flex-col justify-between">
    <img src={image} alt="" loading="lazy" />
    <div className="dark:bg-dark-card p-4">
      <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
      <p className="text-content pt-4 font-light">{description}</p>
      <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
        Tech Stack : <span className="font-light">{techstack}</span>
      </h3>
    </div>
    <div className="flex justify-between items-center p-4 dark:bg-dark-card">
      {
        previewLink !== null && (
          <div className="flex items-center">
        <svg
          className="stroke-dark-heading dark:stroke-white inline-block min-w-fit"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <a
          href={previewLink}
          target="_blank"
          rel="noreferrer noopener"
          className="underline pl-2 font-light dark:text-white"
        >
          Live Preview
        </a>
      </div>
        )
      }
      
      <div className="flex items-center">
        <svg
          className="dark:fill-light-heading fill-dark-heading inline-block min-w-fit"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z"
          />
        </svg>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer noopener"
          className="underline pl-2 font-light dark:text-white"
        >
          View Code
        </a>
        
      </div>
    
    <div className="flex justify-between items-center p-4 dark:bg-dark-card">
      {videoDemoLink !== null  &&(
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  width="20"
          height="20">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">

        </g>
        <g id="SVGRepo_iconCarrier"> 
          <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
          </g>
          </svg>
          <a
            href={videoDemoLink}
            target="_blank"
            rel="noreferrer noopener"
            className="underline pl-2 font-light dark:text-white"
          >
            Video demo
          </a>
          </div>
          
        )}
    </div>
    </div>
  </article>
  );
}

export default Project;
