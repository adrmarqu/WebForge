interface ThumbnailCardProps
{
    thumbnail?: string;
    title?: string;
    alt?: string;
    onClick: () => void;
}

const ThumbnailCard = ({thumbnail = "", title, alt = "", onClick}: ThumbnailCardProps) =>
{
    return (
    <div onClick={onClick}>
        <img src={thumbnail} alt={alt} title={alt} />
        <p>{title}</p>
    </div>
    );
}

export default ThumbnailCard;