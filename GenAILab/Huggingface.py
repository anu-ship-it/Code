# Use Hugging Face in which we have to use transformer lib. From which we have to summeries the paragraph which we will give to it.from transformers import pipeline
from sklearn import pipeline
from transformers import pipeline
def summarize_text_huggingface(text, model_name="facebook/bart-large-cnn"):
    """
    Summarizes the given text using a Hugging Face transformer model.

    Args:
        text (str): The text to be summarized.
        model_name (str): The name of the Hugging Face model to use for summarization.

    Returns:
        str: The summarized text.
    """
    summarizer = pipeline("summarization", model=model_name)
    summary = summarizer(text, max_length=150, min_length=40, do_sample=False)
    return summary[0]['summary_text']
# Example usage
if __name__ == "__main__":
    text = (
        "Hugging Face is an open-source platform that provides a wide range of tools and libraries "
        "for natural language processing (NLP) tasks. It is known for its Transformers library, "
        "which offers pre-trained models for various NLP applications such as text classification, "
        "named entity recognition, question answering, and text generation. Hugging Face also "
        "provides a user-friendly interface for fine-tuning these models on custom datasets, making "
        "it easier for developers and researchers to leverage state-of-the-art NLP techniques in "
        "their projects."
    )
    summary = summarize_text_huggingface(text)
    print("Original Text:\n", text)
    print("\nSummarized Text:\n", summary)  
