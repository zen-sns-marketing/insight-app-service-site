import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function Privacy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
          <p className="text-gray-600">最終更新日: 2025年6月6日</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. 個人情報の収集について</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                当アプリケーションは、サービスの提供に必要な範囲で個人情報を収集いたします。
                収集する情報には、お名前、メールアドレス、お問い合わせ内容などが含まれます。
                これらの情報は、お客様の同意なく第三者に提供することはありません。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. 個人情報の利用目的</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• サービスの提供および運営</li>
                <li>• お客様からのお問い合わせへの対応</li>
                <li>• サービスの改善および新機能の開発</li>
                <li>• 重要なお知らせの配信</li>
                <li>• 利用規約違反の調査</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. 個人情報の第三者提供</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 mt-3">
                <li>• お客様の同意がある場合</li>
                <li>• 法令に基づく場合</li>
                <li>• 人の生命、身体または財産の保護のために必要がある場合</li>
                <li>• 公衆衛生の向上または児童の健全な育成の推進のため特に必要がある場合</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. 個人情報の安全管理</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                個人情報へのアクセスは必要最小限に制限し、暗号化やアクセス制御等の技術的対策を実施いたします。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Cookie等の使用について</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                当アプリケーションでは、サービスの利便性向上のためCookieを使用する場合があります。
                Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. プライバシーポリシーの変更</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                当社は、法令の変更やサービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。
                変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じるものとします。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. 事業者情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold">事業者名：</span>
                  株式会社ZEN
                </div>
                <div>
                  <span className="font-semibold">所在地：</span>
                  〒770-8053 徳島県徳島市沖浜東３丁目４６ Ｊビル 東館205
                </div>
                <div>
                  <span className="font-semibold">連絡先：</span>
                  <a href="mailto:horikawa.masataka.mass@gmail.com" className="text-blue-600 hover:text-blue-800">
                    horikawa.masataka.mass@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                本プライバシーポリシーに関するお問い合わせは、以下のお問い合わせページからご連絡ください。
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="contact.html">お問い合わせページへ</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}