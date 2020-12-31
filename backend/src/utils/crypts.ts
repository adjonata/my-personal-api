import bcrypt from "bcrypt";

const generate = async (value: string, salt: number = 12) => {
  return new Promise((resolve, reject) => {
    bcrypt
      .hash(value, salt)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const compare = async (value: string, hash: string) => {
  return await bcrypt.compare(value, hash);
};

export { generate, compare };
