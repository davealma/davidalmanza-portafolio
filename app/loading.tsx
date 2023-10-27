import { Skeleton } from "@mui/joy";
import ContentWrapper from "./ContentWrapper";

export default function Loading() {
    const skeletonWidth = {width: '100%', marginBottom: '10px'};

    return (
        <ContentWrapper>
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="rectangular" sx={skeletonWidth} height={36} />
            <Skeleton variant="rectangular" sx={skeletonWidth} height={20} />
            <Skeleton variant="rectangular" sx={skeletonWidth} height={350} />
        </ContentWrapper>
    )
}