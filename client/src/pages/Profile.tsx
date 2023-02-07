import { PageWrapper } from "../components";

const cardStyles = "bg-white shadow-md rounded-md";

const Profile = () => {
  return (
    <PageWrapper>
      <h2>User Profile</h2>

      <div className="flex items-start flex-col">
        <div className={`${cardStyles}`}>
          <div>image</div>
          <div>name</div>
          <div>country</div>
        </div>
        <div className={`${cardStyles}`}>
          <h4>Interests</h4>
        </div>
        <div className={`${cardStyles}`}>
          <h4>Biography</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem saepe
            blanditiis aperiam nostrum inventore odit illo fugiat nobis dolor
            obcaecati!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Profile;
