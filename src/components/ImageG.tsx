import Image, { ImageProps } from 'next/image';

interface GImageProps extends ImageProps {
    src: string;
}

const ImageG: React.FC<GImageProps> = ({ src, ...props }) => {
    // const pathway =   process.env.NODE_ENV === "production" ? '/Grace-Website' : ''; 
    return (
        <Image
            src={src}
            {...props}
        />
    );
};

export default ImageG;
