import { EmailTemplate } from 'src/app/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend('re_5y6S7Bke_EgFWENSPSj7LxTcGapVDorCB');

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Daniel <no-reply@daniel04kp.com>',
      to: ['daniel04kp@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
