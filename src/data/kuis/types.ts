export interface QuizOption {
  id: string;
  teks: string;
}

export interface QuizQuestion {
  id: string;
  questionVersion: string;
  konsep: string;
  pertanyaan: string;
  opsi: QuizOption[];
  jawabanBenar: string;
  pembahasan: string;
}