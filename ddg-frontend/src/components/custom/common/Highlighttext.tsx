// Utility function to remove diacritics
const removeDiacritics = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const escapeRegExp = (str: string) => {
  const value = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return removeDiacritics(value);
};

interface HighlightTextProps {
  text: string;
  searchTerm: string;
}

export const HighlightText = ({ text, searchTerm }: HighlightTextProps) => {
  if (!searchTerm) return text;

  const normalizedText = removeDiacritics(text);
  const normalizedSearchTerm = escapeRegExp(searchTerm);

  const regex = new RegExp(`(${normalizedSearchTerm})`, "gi");
  let lastIndex = 0;
  const result = [];

  normalizedText.replace(regex, (match, _group, index) => {
    if (lastIndex !== index) {
      result.push(text.slice(lastIndex, index));
    }
    result.push(
      <mark key={index}>{text.slice(index, index + match.length)}</mark>,
    );
    lastIndex = index + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return <>{result}</>;
};
