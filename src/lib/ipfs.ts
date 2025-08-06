import { create } from 'ipfs-http-client';

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(
      `${process.env.NEXT_PUBLIC_IPFS_PROJECT_ID}:${process.env.NEXT_PUBLIC_IPFS_PROJECT_SECRET}`
    ).toString('base64')}`,
  },
});

export const uploadToIPFS = async (file: File) => {
  try {
    const added = await client.add(file);
    return `https://ipfs.io/ipfs/${added.path}`;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw error;
  }
};

export const uploadJSONToIPFS = async (json: any) => {
  try {
    const added = await client.add(JSON.stringify(json));
    return `https://ipfs.io/ipfs/${added.path}`;
  } catch (error) {
    console.error('Error uploading JSON to IPFS:', error);
    throw error;
  }
};