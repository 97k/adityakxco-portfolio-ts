import { Flex, SmartImage } from '@/once-ui/components';
import { ImageOrPathType } from '@/types/content';

interface ImageDisplayProps {
    images: ImageOrPathType[];
    paddingLeft?: string;
}

export default function ImageDisplay({ images, paddingLeft = "0" }: ImageDisplayProps) {
    if (!images || images.length === 0) return null;

    return (
        <Flex
            fillWidth
            paddingTop="m"
            paddingLeft={paddingLeft}
            wrap>
            {images.map((image, index) => {
                // Handle both string and object image types
                const src = typeof image === 'string' ? image : image.src;
                const alt = typeof image === 'string' ? 'Project image' : image.alt;
                const width = typeof image === 'string' ? 16 : image.width;
                const height = typeof image === 'string' ? 9 : image.height;

                return (
                    <Flex
                        key={index}
                        border="neutral-medium"
                        borderStyle="solid-1"
                        radius="m"
                        minWidth={width}
                        height={height}>
                        <SmartImage
                            enlarge
                            radius="m"
                            sizes={width.toString()}
                            alt={alt}
                            src={src}
                        />
                    </Flex>
                );
            })}
        </Flex>
    );
} 