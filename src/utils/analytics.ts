"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export const trackEvent = (event: string, value?: string) => {
  sendGTMEvent({ event, value });
  console.log(`Evento enviado: ${event}, Valor: ${value || "N/A"}`);
};
