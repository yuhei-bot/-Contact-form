import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });

  // ミントブルーの背景色を設定
  const backgroundStyle = {
    backgroundColor: '#e0f7fa',
    minHeight: '100vh',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center'
  };

  const tableStyle = {
    backgroundColor: '#ffffff', // フォーム部分は白
    width: '100%',
    maxWidth: '600px',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const labelStyle = {
    backgroundColor: '#b2dfdb', // 少し濃いミント色でラベルを強調
    padding: '15px',
    border: '1px solid #ccc',
    fontWeight: 'bold',
    width: '30%'
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc'
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        {/* <h1>でお問い合わせフォームを追加 */}
        <h1 style={{ textAlign: 'center', color: '#00695c' }}>お問い合わせフォーム</h1>
        
        <form>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={labelStyle}>お名前</td>
                <td style={inputStyle}>
                  <input style={{width: '95%'}} />
                </td>
              </tr>
              <tr>
                <td style={labelStyle}>メールアドレス</td>
                <td style={inputStyle}>
                  <input style={{width: '95%'}} />
                </td>
              </tr>
              <tr>
                <td style={labelStyle}>お問い合わせ内容</td>
                <td style={inputStyle}>
                  <textarea style={{width: '95%', height: '100px'}} />
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{ padding: '10px 30px', backgroundColor: '#00796b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              送信する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}