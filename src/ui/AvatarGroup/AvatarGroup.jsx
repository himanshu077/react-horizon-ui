import React from 'react';

const AvatarGroup = ({ avatars, maxNumber }) => {
  const avatarList = avatars.slice(0, maxNumber);
  const overflowCount = avatars.length - maxNumber;

  return (
    <div className="flex items-center">
      {avatarList.map((avatar) => (
        <div
          key={avatar.id}
          className="rounded-full overflow-hidden"
        >
          <img
            src={avatar.src}
            alt={avatar.alt}
            className=" object-cover"
          />
        </div>
      ))}
      {overflowCount > 0 && (
        <div className="rounded-full overflow-hidden border-2 border-white bg-gray-300 flex items-center justify-center" style={{ width: '34px', height: '34px' }}>
          <span className="text-white font-bold">+{overflowCount}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
