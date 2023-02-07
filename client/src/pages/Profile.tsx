import { PageWrapper } from "../components";

const cardStyles = "bg-white shadow-lg rounded-md p-4  w-full";

const profileTags = [
  "reactjs",
  "nextjs",
  "remix",
  "ssr",
  "ssg",
  "rfc",
  "typescript",
  "tailwindcss",
];

const Profile = () => {
  return (
    <PageWrapper>
      <h2 className="flex items-center justify-center">User Profile</h2>

      <div className="flex items-center justify-center max-w-2xl mx-auto">
        <div className="flex items-start flex-col">
          <div className={`flex items-center flex-col ${cardStyles} mb-4`}>
            <div className="w-[150px] h-[150px] rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full h-full rounded-full block"
                alt="user profile avatar"
              />
            </div>
            <h3
              className="font-bold text-base my-1
            "
            >
              Sarah Johnson
            </h3>
            <p>United States</p>
          </div>
          <div className={`${cardStyles} mb-4`}>
            <h4 className="mb-4 font-bold">Interests</h4>
            <div className="grid grid-cols-4 gap-2">
              {profileTags.map((tag) => (
                <p
                  key={tag}
                  className="py-1 border border-gray-200 flex items-center justify-center px-2 rounded-md m-3"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className={`${cardStyles}`}>
            <h3 className="mb-4 font-bold">Biography</h3>
            <p>
              Sarah Johnson is a 32-year-old react developer who's passionate
              about her work and constantly seeking new challenges. In her free
              time, she enjoys hiking and being surrounded by nature. She's an
              adventurer at heart and loves to explore new trails and scenic
              routes. Sarah's also a music enthusiast and can often be found
              listening to her favorite bands and attending concerts. Her
              creative mind and love for the outdoors make her a unique
              individual who's always on the lookout for new experiences and
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Profile;
