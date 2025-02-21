interface FriendImageProps {
  image: string;
}

export function FriendImage({image}: FriendImageProps) {
  return (
      <img
        src={image}
        alt="Friend's image"
        className="size-8 object-cover rounded-lg"
      />
  );

}