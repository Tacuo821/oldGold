import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LifeSecondRoundLP() {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 min-h-screen p-8 text-center">
      <h1 className="text-5xl font-bold text-purple-800 mb-6">
        人生、2周目。俺が社長。
      </h1>
      <p className="text-xl mb-6 text-gray-700">
        「もう一花咲かせたい」——そう思ってるあなたへ。
        <br />
        過去の実績じゃなく、これからどう生きたいか。
        <br />
        必要なのは「転び方まで決める」人生設計です。
      </p>
      <img
        src="/kya-kun-photo.jpg"
        alt="kya-君スマイル"
        className="mx-auto rounded-full w-48 h-48 object-cover border-4 border-purple-500 shadow-lg mb-6"
      />
      <h2 className="text-3xl font-semibold text-pink-700 mb-4">
        ここに来てほしいのは、こんな人：
      </h2>
      <ul className="text-lg text-gray-800 mb-6 space-y-2">
        <li>✔️ 自分で未来を設計したい人</li>
        <li>✔️ 失敗も込みで「やってみたい」と思っている人</li>
        <li>✔️ 他人のルールじゃなく、自分のルールで生きたい人</li>
        <li>✔️ おしゃれで、かっこよく、楽しみながら挑戦したい人</li>
      </ul>
      <Button className="bg-purple-700 text-white px-8 py-4 text-lg rounded-full hover:bg-purple-800 transition mb-8">
        まずは無料タイプ診断する
      </Button>
      <Card className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            『失敗計画書 × 未来履歴書』とは？
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            「やりたいこと」を決めるだけじゃない。
            「やらないこと」「転び方」まで設計するから、ブレずに進める。
            仲間と一緒に、人生2周目をキックオフしませんか？
          </p>
          <Button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
            プログラムの詳細を見る
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
