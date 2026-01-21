# # Use Hugging Face's pre-trained T5 model to summarize news articles into concise summaries from transformers import T5Tokenizer, TFT5ForConditionalGeneration.
from transformers import T5Tokenizer, TFT5ForConditionalGeneration
tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5ForConditionalGeneration.from_pretrained("t5-small")
def summarize(article, max_length=130, min_length=40):
    input_text = "summarize: " + article
    inputs = tokenizer(
        input_text,
        max_length=512,
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
print(summarize("Your news article text here"))# # Use Hugging Face's pre-trained T5 model to summarize news articles into concise summaries

