import contactBook from "../public/data/contactBook";

function ProfileCard({ photoProfile, name, address, waNumber, bestie }) {
  return (
    <div className={`w-full max-w-sm sm:max-w-md md:max-w-lg border-2 rounded-lg p-4 shadow-md border-gray-300 ${bestie ? 'bg-green-100' : 'bg-white'}`}>
      <div className="flex items-center gap-4">
        <img src={photoProfile} alt={`${name}'s profile`} className="rounded-full w-14 h-14 object-cover" />
        
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-xl sm:text-2xl">{name}</h4>
          {bestie && (
            <span className="text-xs font-medium text-white bg-green-700 px-2 py-1 rounded-md">
              BEST FRIEND
            </span>
          )}
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2 items-center">
          <img src="./data/image/address.svg" alt="address" className="w-5 h-5 mt-1" />
          <p className="text-sm break-words">{address}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="./data/image/whatsapp.svg" alt="whatsapp" className="w-5 h-5 mt-1" />
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-800 break-words"
          >
            {waNumber}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center p-4">
      <div className="text flex flex-col gap-1 items-center justify-center">
      <p>My Personal</p>
      <h1 className="text-3xl font-bold">Contact Book</h1>
      </div>
      {contactBook.map(profile => (
        <ProfileCard
          photoProfile={profile.photoProfile}
          name={profile.name}
          address={profile.address}
          waNumber={profile.waNumber}
          bestie={profile.bestie}
        />
      ))}
    </section>
  );
}