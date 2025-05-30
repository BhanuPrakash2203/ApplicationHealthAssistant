/**
 * Interface for the Feedback DTO that is returned for multiple API methods.
 * @see FeedbackBase FeedbackBase has details on additional properties of the Feedback.
 */
import UsermBase from './UsermBase';

export default interface Userms extends UsermBase {
    /**
     * The ID for the Feedback. This value will only be created by the server side
     * when a Feedback is created.
     *
     * It should be a 24 character hex string, which will be populated with a
     * stringified MongoDB ObjectID.
     */
    id?: string;
}
