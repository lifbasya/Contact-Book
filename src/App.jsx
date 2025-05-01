import contactBook from "../public/data/contactBook";

function ProfileCard({photoProfile, name, address, waNumber, bestie}) {
  return (
    <div className={`w-lg max-w-full card border-2 rounded-lg p-4 shadow-md border-gray-300
      ${bestie ? ' bg-green-100' : 'bg-white'}`}>
      <div className="flex items-center gap-4">
        <img src={photoProfile} alt={`${name}'s profile`} className="profile-pic rounded-4xl w-14" />
        <h4 className="font-medium text-2xl">{name}</h4>
        {bestie && <span className="text-xs font-medium text-white bg-green-700 px-2 py-2 rounded-md">BEST FRIEND</span>}
      </div>
      <hr className="mt-4"/>
      <div className="flex gap-8 mt-4">
        <div className="flex gap-2 items-center">
          <img src="./data/image/address.svg" alt="address" />
          <p className='w-48'>{address}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="./data/image/whatsapp.svg" alt="whatsapp" />
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="text-blue-800">{waNumber}</a>
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