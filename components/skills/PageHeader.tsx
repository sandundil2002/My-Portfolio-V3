import React from "react";
import Title from "@/components/ui/Title";

type PageHeaderProps = {
    sentence: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ sentence }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-4 mb-12">
            <Title
                sentence={sentence}
                manualMode={false}
                blurAmount={3}
                borderColor="rgba(96, 165, 250, 0.8)"
                glowColor="rgba(96, 165, 250, 0.4)"
                animationDuration={2}
                pauseBetweenAnimations={1}
            />
        </div>
    );
};

export default PageHeader;