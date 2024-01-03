import CreateTopicForm from '@/components/topics/create-topic-form';
import TopicList from './topics/topics-list';
import { Divider } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <CreateTopicForm />
        <Divider className="my-2" />
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
