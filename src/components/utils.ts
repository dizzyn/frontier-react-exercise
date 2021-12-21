export const createInitialValues = (sections: Frontier.Section[]) =>
  sections.reduce(
    (sectionIds, section) => ({
      ...sectionIds,
      [section.id]: section.content.reduce(
        (elementIds, elem) => ({
          ...elementIds,
          [elem.id]: elem.type === 'boolean' ? false : '',
        }),
        {},
      ),
    }),
    {},
  );

export const getValidator =
  (required: boolean, pattern?: string) => (value: string) => {
    let error;

    if (required && !value) {
      error = 'Required';
    } else if (pattern && !new RegExp(pattern).test(value)) {
      error = 'Invalid format';
    }
    return error;
  };
