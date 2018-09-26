const addVote = (value) => (state, id) => state.votes[id] + value;

export const addUpvote = addVote(1);

export const addDownvote = addVote(-1);
