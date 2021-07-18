import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { slug, title, image, date, description } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imageSrc = `/images/posts/${image}`;

  return (
    <Link>
      <li>
        <a>
          <div>
            <Image src={imageSrc} alt={title} width={200} height={200} />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{description}</p>
          </div>
        </a>
      </li>
    </Link>
  );
};
export default PostItem;
