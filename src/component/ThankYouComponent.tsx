import React from "react";

type ThankYouProps = {
    onShare: () => void;
    shareEnabled: boolean
}

export default ({onShare, shareEnabled}: ThankYouProps) => (
    <div>
        <div>Thank you!</div>
        <div>
            {shareEnabled ? <button onClick={onShare}>Share</button> : <span>Thanks for Sharing</span>}
        </div>
    </div>
);