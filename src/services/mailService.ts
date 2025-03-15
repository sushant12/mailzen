import apiClient from "./apiClient";

export interface Mail {
  id: string;
  subject: string;
  sender: string;
  recipients: string[];
  content: string;
  date: string;
}

export const MailService = {
  getInbox: async (): Promise<Mail[]> => {
    const response = await apiClient.get("/mails/inbox");
    return response.data;
  },

  getSpam: async (): Promise<Mail[]> => {
    const response = await apiClient.get("/mails/spam");
    return response.data;
  },

  getSent: async (): Promise<Mail[]> => {
    const response = await apiClient.get("/mails/sent");
    return response.data;
  },

  getDrafts: async (): Promise<Mail[]> => {
    const response = await apiClient.get("/mails/draft");
    return response.data;
  },
};
