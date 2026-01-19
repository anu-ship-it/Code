# Movie Recommendation System using Collaborative Filtering
# Install: pip install pandas numpy scikit-learn

import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Sample movie ratings data
# In real project, use MovieLens dataset
ratings_data = {
    'user': ['Alice', 'Alice', 'Alice', 'Bob', 'Bob', 'Charlie', 'Charlie', 'David', 'David', 'Eve', 'Eve', 'Eve'],
    'movie': ['Inception', 'Interstellar', 'The Matrix', 'Inception', 'Avatar', 'Interstellar', 'Avatar', 'The Matrix', 'Avatar', 'Inception', 'Interstellar', 'The Matrix'],
    'rating': [5, 4, 5, 4, 2, 5, 3, 5, 4, 4, 5, 4]
}

df = pd.DataFrame(ratings_data)

print("=== Movie Recommendation System ===\n")
print("Sample Ratings:")
print(df)

# Create user-movie matrix
user_movie_matrix = df.pivot_table(
    index='user', 
    columns='movie', 
    values='rating'
).fillna(0)

print("\n=== User-Movie Rating Matrix ===")
print(user_movie_matrix)

# Calculate similarity between users
user_similarity = cosine_similarity(user_movie_matrix)
user_similarity_df = pd.DataFrame(
    user_similarity,
    index=user_movie_matrix.index,
    columns=user_movie_matrix.index
)

print("\n=== User Similarity Scores ===")
print(user_similarity_df.round(2))

def get_recommendations(target_user, n_recommendations=3):
    """
    Recommend movies to a user based on similar users' preferences
    """
    # Get similarity scores for target user
    similar_users = user_similarity_df[target_user].sort_values(ascending=False)
    
    # Remove the user themselves
    similar_users = similar_users.drop(target_user)
    
    print(f"\n=== Recommendations for {target_user} ===")
    print(f"\nMost similar users:")
    for user, score in similar_users.head(3).items():
        print(f"  {user}: {score:.2f} similarity")
    
    # Get movies the target user hasn't rated
    target_ratings = user_movie_matrix.loc[target_user]
    unwatched_movies = target_ratings[target_ratings == 0].index
    
    if len(unwatched_movies) == 0:
        print(f"\n{target_user} has already rated all movies!")
        return
    
    # Predict ratings for unwatched movies
    recommendations = {}
    for movie in unwatched_movies:
        # Weighted average of similar users' ratings
        weighted_sum = 0
        similarity_sum = 0
        
        for similar_user in similar_users.index:
            if user_movie_matrix.loc[similar_user, movie] > 0:
                weight = similar_users[similar_user]
                rating = user_movie_matrix.loc[similar_user, movie]
                weighted_sum += weight * rating
                similarity_sum += weight
        
        if similarity_sum > 0:
            predicted_rating = weighted_sum / similarity_sum
            recommendations[movie] = predicted_rating
    
    # Sort and display recommendations
    sorted_recommendations = sorted(
        recommendations.items(), 
        key=lambda x: x[1], 
        reverse=True
    )
    
    print(f"\nTop {n_recommendations} movie recommendations:")
    for i, (movie, predicted_rating) in enumerate(sorted_recommendations[:n_recommendations], 1):
        print(f"  {i}. {movie} (predicted rating: {predicted_rating:.2f}/5)")
    
    return sorted_recommendations[:n_recommendations]

# Test recommendations for different users
get_recommendations('Bob')
get_recommendations('Charlie')

# Add a new user with some ratings
print("\n" + "="*50)
print("=== Adding New User ===")
new_ratings = pd.DataFrame({
    'user': ['Frank', 'Frank'],
    'movie': ['Inception', 'The Matrix'],
    'rating': [5, 5]
})

df_updated = pd.concat([df, new_ratings], ignore_index=True)
user_movie_matrix_updated = df_updated.pivot_table(
    index='user', 
    columns='movie', 
    values='rating'
).fillna(0)

user_similarity_updated = cosine_similarity(user_movie_matrix_updated)
user_similarity_df = pd.DataFrame(
    user_similarity_updated,
    index=user_movie_matrix_updated.index,
    columns=user_movie_matrix_updated.index
)

user_movie_matrix = user_movie_matrix_updated

get_recommendations('Frank')

print("\n=== How It Works ===")
print("""
1. Creates a matrix of user ratings for movies
2. Calculates similarity between users (cosine similarity)
3. Finds users similar to the target user
4. Recommends movies that similar users liked
5. Weights recommendations by user similarity

This is Collaborative Filtering - learning from user behavior!
Real systems use this for Netflix, Amazon, Spotify, etc.
""")