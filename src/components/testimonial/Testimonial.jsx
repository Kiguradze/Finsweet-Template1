import "./testimonial.css";

const Testimonial = ({ img, name, desk }) => {
  return (
    <div className="testimonial">
      <div className="person">
        <img src={img} alt={img} />
        <div className="person-rating">
          <span>{name}</span>
          <div className="stars">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.97928 0L12.6458 6.81167L19.567 7.40122L14.2937 12.2006L15.9048 19.3766L9.97928 15.5312L4.05377 19.3766L5.66482 12.2006L0.391602 7.40122L7.3128 6.81167L9.97928 0Z"
                fill="#F24C27"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.97928 0L12.6458 6.81167L19.567 7.40122L14.2937 12.2006L15.9048 19.3766L9.97928 15.5312L4.05377 19.3766L5.66482 12.2006L0.391602 7.40122L7.3128 6.81167L9.97928 0Z"
                fill="#F24C27"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.97928 0L12.6458 6.81167L19.567 7.40122L14.2937 12.2006L15.9048 19.3766L9.97928 15.5312L4.05377 19.3766L5.66482 12.2006L0.391602 7.40122L7.3128 6.81167L9.97928 0Z"
                fill="#F24C27"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.97928 0L12.6458 6.81167L19.567 7.40122L14.2937 12.2006L15.9048 19.3766L9.97928 15.5312L4.05377 19.3766L5.66482 12.2006L0.391602 7.40122L7.3128 6.81167L9.97928 0Z"
                fill="#F24C27"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.97928 0L12.6458 6.81167L19.567 7.40122L14.2937 12.2006L15.9048 19.3766L9.97928 15.5312L4.05377 19.3766L5.66482 12.2006L0.391602 7.40122L7.3128 6.81167L9.97928 0Z"
                fill="#F24C27"
              />
            </svg>
          </div>
        </div>
      </div>
      <p>{desk}</p>
    </div>
  );
};

export default Testimonial;
