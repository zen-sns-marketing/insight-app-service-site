import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("お問い合わせを受け付けました。後日ご連絡いたします。");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <a href="index.html" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              ホームに戻る
            </a>
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
          <p className="text-gray-600">
            ご質問やご要望がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  お問い合わせフォーム
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        お名前 *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="山田太郎"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        メールアドレス *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="お問い合わせの件名"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ *</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>開発者情報</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">開発チーム</h4>
                    <p className="text-gray-600">Zen Tokushima Development Team</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">所在地</h4>
                    <p className="text-gray-600">徳島県</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">対応時間</h4>
                    <p className="text-gray-600">
                      平日 9:00 - 18:00<br />
                      （土日祝日を除く）
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>よくあるお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Q. サービスの利用料金は？</h4>
                    <p className="text-gray-600 text-sm">現在、基本機能は無料でご利用いただけます。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Q. データのセキュリティは？</h4>
                    <p className="text-gray-600 text-sm">エンタープライズグレードのセキュリティを採用しています。</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Q. サポート体制は？</h4>
                    <p className="text-gray-600 text-sm">メールでのサポートを提供しております。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}