# Apply transformer-based models (e.g., BERT, GPT, T5) to solve NLP tasks like summarization and classification
from transformers import BartTokenizer, TFBartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")
model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
def summarize(article, max_length=130, min_length=40):
    inputs = tokenizer(
        article,
        max_length=1024,
        truncation=True,
        return_tensors="tf"
    )

    summary_ids = model.generate(
        inputs["input_ids"],
        attention_mask=inputs["attention_mask"],
        num_beams=4,
        min_length=min_length,
        max_length=max_length,
        early_stopping=True
    )

    return tokenizer.decode(summary_ids[0], skip_special_tokens=True)
print(summarize("Your news article text here"))
