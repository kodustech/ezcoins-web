export default async (_, args, { client }) => {
  await Promise.all([localStorage.removeItem('token'), client.resetStore()]);
  return true;
};
