export const validateEnv = (env: string): string => {
  const variable = process.env[`${env}`];
  if (!variable) {
    throw new Error(`variable not found: ${env}`);
  }
  return variable;
};
