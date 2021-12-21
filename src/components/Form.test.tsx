import { render, fireEvent, waitFor } from '@testing-library/react';
import Form from './Form';

test('Text', async () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <Form
      onSubmit={onSubmit}
      sections={[
        {
          id: 'a',
          title: 'a',
          content: [
            {
              id: 'x',
              type: 'text',
              metadata: { required: false },
              question_text: '',
            },
          ],
        },
      ]}
    />,
  );

  fireEvent.change(getByTestId('a.x'), { target: { value: 'email' } });
  fireEvent.click(getByTestId('submit'));

  await waitFor(() =>
    expect(onSubmit.mock.calls[0][0]).toMatchObject({ a: { x: 'email' } }),
  );
});

test('Text required', async () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <Form
      onSubmit={onSubmit}
      sections={[
        {
          id: 'a',
          title: 'a',
          content: [
            {
              id: 'x',
              type: 'text',
              metadata: { required: true },
              question_text: '',
            },
          ],
        },
      ]}
    />,
  );

  fireEvent.click(getByTestId('submit'));
  await waitFor(() => expect(onSubmit).toBeCalledTimes(0));
});

test('Boolean true/false', async () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(
    <Form
      onSubmit={onSubmit}
      sections={[
        {
          id: 'a',
          title: 'a',
          content: [
            {
              id: 'x',
              type: 'boolean',
              metadata: { required: false },
              question_text: '',
            },
            {
              id: 'y',
              type: 'boolean',
              metadata: { required: false },
              question_text: '',
            },
          ],
        },
      ]}
    />,
  );

  fireEvent.click(getByTestId('a.x-yes'));
  fireEvent.click(getByTestId('submit'));

  await waitFor(() =>
    expect(onSubmit.mock.calls[0][0]).toEqual({ a: { x: true, y: false } }),
  );
});
