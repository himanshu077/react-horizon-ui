import React from 'react';

const AvatarGroup = ({ avatars, maxCount }) => {
  const visibleAvatars = avatars.slice(0, maxCount);
  const overflowCount = avatars.length - maxCount;

  return (
    <div className="flex items-center space-x-[-10px]">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className="relative rounded-full border-2 border-white shadow-sm"
          style={{
            zIndex: visibleAvatars.length - index,
            marginLeft: `-${index * 8}px`,
          }}
        >
          <img
            src={avatar.image}
            alt={avatar.name}
            className="rounded-full w-8 h-8"
          />
        </div>
      ))}
      {overflowCount > 0 && (
        <div className="relative rounded-full border-2 border-white bg-gray-200 shadow-sm">
          <span className="absolute top-0 right-0 px-2 py-1 bg-white text-gray-600 text-sm rounded-full">
            +{overflowCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
