"use client";
import React, { useState } from 'react';

const serviceDetailsData = {
  'pan': {
    title: 'PAN Card Apply/Correction',
    icon: 'fa-address-card',
    price: '200',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">पहचान प्रमाण (Identity Proof) (कोई एक):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड (Recommended)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> वोटर आईडी / पासपोर्ट / ड्राइविंग लाइसेंस</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">पता प्रमाण (Address Proof) (कोई एक):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> वोटर आईडी / बैंक पासबुक / बिजली बिल</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">जन्म तिथि प्रमाण (Date of Birth Proof) (कोई एक):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड / जन्म प्रमाण पत्र / 10वीं मार्कशीट</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">अन्य आवश्यकताएं:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> पासपोर्ट साइज फोटो</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> मोबाइल नंबर (आधार से लिंक)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> ईमेल आईडी (यदि उपलब्ध हो)</li>
      </ul>
    `
  },
  'birth-death': {
    title: 'Birth/Death Certificate',
    icon: 'fa-baby',
    price: '300',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">जन्म प्रमाण पत्र के लिए:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> बच्चे का जन्म अस्पताल/नर्सिंग होम प्रमाण पत्र</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> माता-पिता का आधार कार्ड और जन आधार कार्ड</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> माता-पिता का मोबाइल नंबर</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> घर पर जन्म होने की स्थिति में शपथ पत्र (Affidavit)</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">मृत्यु प्रमाण पत्र के लिए:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> अस्पताल/डॉक्टर द्वारा जारी मृत्यु प्रमाण पत्र</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> मृतक का आधार कार्ड (यदि उपलब्ध हो)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आवेदक का आधार कार्ड और जन आधार कार्ड</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> श्मशान/कब्रिस्तान रसीद (यदि आवश्यक हो)</li>
      </ul>
      <div style="background: #FEF2F2; padding: 10px; border-radius: 8px; color: #EF4444; font-size: 0.9rem; margin-top: 15px;"><i class="fa-solid fa-circle-info"></i> नोट: 21 दिनों के भीतर पंजीकरण कराना सबसे आसान होता है।</div>
    `
  },
  'certificate': {
    title: 'Income / Caste / Domicile Certificate',
    icon: 'fa-file-invoice',
    price: '200',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">आय प्रमाण पत्र (Income):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड, जन आधार कार्ड, बैंक पासबुक</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आय का शपथ पत्र (Affidavit), पासपोर्ट साइज फोटो</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">जाति प्रमाण पत्र (Caste):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड, जन आधार कार्ड, राशन कार्ड</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> पिता/माता का जाति प्रमाण पत्र, परिवार रजिस्टर/जन्म प्रमाण पत्र</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">मूल निवास (Domicile):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड, जन आधार कार्ड, राशन कार्ड, वोटर आईडी</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> बिजली/पानी/टेलीफोन बिल</li>
      </ul>
    `
  },
  'driving-licence': {
    title: 'Driving Licence (LL & DL)',
    icon: 'fa-car',
    price: '3500',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">लर्निंग लाइसेंस (LL) के लिए:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड, जन आधार कार्ड (यदि उपलब्ध हो)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> निवास प्रमाण (आधार, वोटर आईडी, बिजली बिल आदि)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> जन्म तिथि प्रमाण (आधार, 10वीं मार्कशीट आदि)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> पासपोर्ट साइज फोटो, मोबाइल नंबर</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">स्थायी ड्राइविंग लाइसेंस (DL) के लिए:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> वैध लर्निंग लाइसेंस</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आधार कार्ड, निवास प्रमाण, आयु प्रमाण</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> ड्राइविंग टेस्ट पास करना होगा</li>
      </ul>
    `
  },
  'jan-aadhar': {
    title: 'Jan Aadhar Card',
    icon: 'fa-id-card-clip',
    price: '300',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">नया कार्ड बनवाने / अपडेट के लिए:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> परिवार मुखिया का आधार कार्ड और बैंक पासबुक</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> 5 वर्ष से अधिक आयु के सभी सदस्यों के आधार कार्ड</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> जन्म तिथि/आयु प्रमाण पत्र (जन्म प्रमाण पत्र, 10वीं मार्कशीट आदि)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> निवास प्रमाण (आधार कार्ड, बिजली बिल आदि)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> परिवार के सभी सदस्यों के रंगीन फोटो</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> आय का स्व-घोषणा पत्र (Self Declaration)</li>
      </ul>
    `
  },
  'challan-traffic': {
    title: 'Traffic Challan Services',
    icon: 'fa-traffic-light',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Documents:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Vehicle Number (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> RC (Registration Certificate) (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-info-circle" style="color: #3B82F6; margin-right: 8px;"></i> Driving Licence (Optional)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-info-circle" style="color: #3B82F6; margin-right: 8px;"></i> Challan Number (Optional)</li>
      </ul>
    `
  },
  'challan-court': {
    title: 'Court Challan Services',
    icon: 'fa-gavel',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Documents:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Court Case Number (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number (Mandatory)</li>
      </ul>
    `
  },
  'challan-revenue': {
    title: 'Revenue & Property Challans',
    icon: 'fa-house-chimney',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Documents:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Property ID (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Jamabandi Copy (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number (Mandatory)</li>
      </ul>
    `
  },
  'challan-education': {
    title: 'Education Challans',
    icon: 'fa-graduation-cap',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Documents:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Student ID (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number (Mandatory)</li>
      </ul>
    `
  },
  'challan-utility': {
    title: 'Utility & Municipal Challans',
    icon: 'fa-building',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Electricity / Water Bill:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Consumer/Connection Number</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Municipal Tax:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Property ID</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number</li>
      </ul>
    `
  },
  'challan-transport': {
    title: 'Transport Department Services',
    icon: 'fa-truck',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Vehicle Registration Fee:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card, Vehicle Invoice</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Insurance Copy, Pollution Certificate</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Address Proof</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Driving Licence Fee:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card, Passport Size Photo</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Address Proof, Learning Licence (if applicable)</li>
      </ul>
    `
  },
  'challan-health': {
    title: 'Health Department Challans',
    icon: 'fa-hospital',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Documents:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Hospital Registration Slip (Mandatory)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number (Mandatory)</li>
      </ul>
    `
  },
  'challan-gst': {
    title: 'GST & Tax Challans',
    icon: 'fa-file-invoice-dollar',
    price: 'Actual Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">GST Challan (PMT-06):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> GSTIN, PAN Card, Aadhaar Card, Mobile Number</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Income Tax / TDS:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> PAN Card / TAN Number, Aadhaar Card, Mobile Number</li>
      </ul>
    `
  },
  'bill-payment': {
    title: 'Bill Payment & Recharge',
    icon: 'fa-money-bill-transfer',
    price: 'Actual Bill Amount + 10% Service Charge',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Details:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Old Bill Copy / K-Number / Consumer Number</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile Number</li>
      </ul>
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Supported Services:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Electricity Bill (AVVNL, JVVNL, etc.)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Water Bill (PHED)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Mobile & DTH Recharge</li>
      </ul>
    `
  },
  'govt-scheme': {
    title: 'Government Scheme Registration',
    icon: 'fa-landmark',
    price: 'Varies per Scheme',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">General Required Documents:</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Jan Aadhar Card (Mandatory for Rajasthan Schemes)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Bank Passbook Copy</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Passport Size Photo</li>
      </ul>
      <div style="background: #EFF6FF; padding: 10px; border-radius: 8px; color: #1E40AF; font-size: 0.9rem; margin-top: 15px;"><i class="fa-solid fa-circle-info"></i> Note: Specific schemes like Palanhar, Pension, or Shramik Card may require additional specific documents.</div>
    `
  },
  'passport': {
    title: 'Passport Apply',
    icon: 'fa-passport',
    price: '200',
    documents: `
      <h4 style="color: #1E293B; margin-bottom: 10px; font-size: 1.1rem;">Required Documents (Any 3 generally required):</h4>
      <ul style="list-style: none; padding: 0; margin-bottom: 15px; color: #475569;">
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Aadhaar Card (Must have updated details and linked mobile)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> 10th Marksheet (For Non-ECR category)</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> PAN Card or Voter ID</li>
        <li style="margin-bottom: 5px;"><i class="fa-solid fa-check" style="color: #10B981; margin-right: 8px;"></i> Bank Passbook (with photo affixed and stamped)</li>
      </ul>
    `
  }
};

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (serviceKey) => {
    setActiveModal(serviceDetailsData[serviceKey]);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0 6rem', background: 'linear-gradient(135deg, #1A56DB 0%, #3B82F6 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)', zIndex: 0 }}></div>
        <div className="container fade-in appear" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Our <span className="highlight" style={{ color: '#FBBF24' }}>Services</span></h1>
          <p style={{ color: '#DBEAFE', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive digital and government services at your doorstep. Click any service to view required documents & pricing!
          </p>
        </div>
      </header>

      {/* Core Services Section */}
      <section className="section-padding" style={{ background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
        {/* Floating Background Blobs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Core Services Cards */}
            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('pan')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#EFF6FF', color: '#1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-address-card"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>PAN Card Apply/Correction</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Apply for a new PAN card or make corrections to an existing one quickly.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#EFF6FF', color: '#1A56DB', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>₹200</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#1A56DB' }}></i></span>
              </div>
            </div>
            
            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('birth-death')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#F0FDF4', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-baby"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Birth/Death Certificate</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Quick processing for essential life event certificates from local authorities.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#F0FDF4', color: '#10B981', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>₹300</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#10B981' }}></i></span>
              </div>
            </div>

            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('certificate')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#FFF7ED', color: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-file-invoice"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Income & Caste Certificate</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Get your official documents verified and issued effortlessly for scholarships.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#FFF7ED', color: '#F97316', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>₹200</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#F97316' }}></i></span>
              </div>
            </div>

            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('bill-payment')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#FEF2F2', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-money-bill-transfer"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Bill Payment & Recharge</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Electricity, water bills, and mobile/DTH recharges done instantly.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#FEF2F2', color: '#EF4444', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>Bill + 10%</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#EF4444' }}></i></span>
              </div>
            </div>

            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('govt-scheme')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#F5F3FF', color: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-landmark"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Govt. Scheme Registration</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Assistance with applying for various state and central govt schemes.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#F5F3FF', color: '#8B5CF6', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>Varies</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#8B5CF6' }}></i></span>
              </div>
            </div>

            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('passport')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#F0FDFA', color: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-passport"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Passport Apply</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>End-to-end guidance for new passport applications and renewals.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#F0FDFA', color: '#14B8A6', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>₹200</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#14B8A6' }}></i></span>
              </div>
            </div>

            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('driving-licence')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#FFFBEB', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-car"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Driving Licence</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Apply for learner's or permanent driving licence with our help.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#FFFBEB', color: '#F59E0B', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>₹3,500</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#F59E0B' }}></i></span>
              </div>
            </div>

            <div className="service-card fade-in appear tilt-card" style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => openModal('jan-aadhar')}>
              <div className="service-icon" style={{ width: '60px', height: '60px', background: '#FDF4FF', color: '#D946EF', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '1.5rem', marginBottom: '1.5rem' }}><i className="fa-solid fa-id-card-clip"></i></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>Jan Aadhar Card</h3>
              <p style={{ color: '#64748B', lineHeight: 1.6, flexGrow: 1 }}>Apply for a new Jan Aadhar card or update family members and details.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                <span style={{ background: '#FDF4FF', color: '#D946EF', padding: '6px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>₹300</span>
                <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right" style={{ color: '#D946EF' }}></i></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rajasthan Challan Services Section (Premium UI) */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF', backgroundImage: 'radial-gradient(rgba(203, 213, 225, 0.4) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}>
        {/* Floating Background Blobs for Challan Section */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center fade-in appear" style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FEF3C7', color: '#D97706', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              <i className="fa-solid fa-shield-halved"></i> Rajasthan Govt Authorized
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#1E293B', marginBottom: '1rem' }}>All Major <span style={{ color: '#1A56DB' }}>Challan Forms</span></h2>
            <p style={{ color: '#64748B', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 1rem' }}>Complete details of government fees and challans available at Shree Shyam e-Mitra. Click any box to view documents!</p>
            <div style={{ display: 'inline-block', padding: '10px 20px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', color: '#0F172A', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <i className="fa-solid fa-tags" style={{ color: '#F97316' }}></i> Pricing Policy: Actual Challan Amount + 10% Service Charge
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
            
            {/* 1 Traffic Challans */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(26,86,219,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-traffic')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#1A56DB'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #1A56DB, #3B82F6)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-traffic-light"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>1. Traffic Challans</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'Speed Violation', desc: 'Tez gaadi chalane par', price: '₹1,100' },
                      { name: 'Red Light Jump', desc: 'Signal todne par', price: '₹1,100' },
                      { name: 'No Helmet', desc: 'Bina helmet ke', price: '₹1,100' },
                      { name: 'No Seatbelt', desc: 'Car mein seatbelt nahi', price: '₹1,100' },
                      { name: 'Wrong Parking', desc: 'Galat jagah parking', price: '₹550' },
                      { name: 'Without License', desc: 'Bina DL ke', price: '₹5,500' },
                      { name: 'Without Insurance', desc: 'Bina insurance ke', price: '₹2,200' },
                      { name: 'Mobile Use While Driving', desc: 'Phone use karne par', price: '₹1,100' },
                      { name: 'Overloading', desc: 'Zyada saamaan/sawari', price: '₹22,000' },
                      { name: 'PUC Not Valid', desc: 'Pollution fail', price: '₹11,000' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#1A56DB', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2 Court Challans */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(217,119,6,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-court')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#D97706'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-gavel"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>2. Court Challans</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'Civil Court Fee', desc: 'Civil case filing ke liye', price: '₹550' },
                      { name: 'Criminal Court Challan', desc: 'Criminal case mein', price: '₹550' },
                      { name: 'Stamp Duty Challan', desc: 'Property registration pe', price: '₹1,100' },
                      { name: 'Judicial Fee Challan', desc: 'Court documents ke liye', price: '₹220' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#D97706', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3 Revenue Challans */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(5,150,105,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-revenue')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#059669'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #059669, #10B981)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-house-chimney"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>3. Revenue & Property</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'Property Tax Challan', desc: 'Ghar/dukaan ka tax', price: '₹1,100' },
                      { name: 'Land Revenue Challan', desc: 'Zameen ka sarkaari tax', price: '₹550' },
                      { name: 'Mutation Fee Challan', desc: 'Zameen naam transfer par', price: '₹330' },
                      { name: 'Registry Challan', desc: 'Property registration fee', price: '₹2,200' },
                      { name: 'Conversion Challan', desc: 'Agriculture to residential', price: '₹5,500' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#059669', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4 Education Challans */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(124,58,237,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-education')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#7C3AED'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-graduation-cap"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>4. Education Challans</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'School Fee Challan', desc: 'Govt school fees', price: '₹550' },
                      { name: 'RBSE Exam Fee', desc: 'Board exam form ke liye', price: '₹1,100' },
                      { name: 'College Admission', desc: 'Govt college admission', price: '₹1,100' },
                      { name: 'University Fee', desc: 'University exam/admission', price: '₹2,200' },
                      { name: 'Scholarship Repayment', desc: 'Scholarship repayment', price: '₹110' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#7C3AED', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5 Utility & Municipal Challans */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(219,39,119,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-utility')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#DB2777'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #DB2777, #EC4899)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-building"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>5. Utility & Municipal</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'Water Bill Challan', desc: 'PHED paani ka bill', price: '₹330' },
                      { name: 'Electricity Bill Challan', desc: 'AVVNL / JVVNL', price: '₹1,100' },
                      { name: 'House Tax Challan', desc: 'Municipal corporation', price: '₹550' },
                      { name: 'Trade License Fee', desc: 'Dukaan ka licence renew', price: '₹2,200' },
                      { name: 'Birth/Death Cert Fee', desc: 'Certificate banwane ki fee', price: '₹110' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#DB2777', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6 Transport Department */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(79,70,229,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-transport')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#4F46E5'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #4F46E5, #6366F1)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-truck"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>6. Transport Dept</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'Vehicle Registration Fee', desc: 'Nayi gaadi register', price: '₹5,500' },
                      { name: 'DL Application Fee', desc: 'Driving licence fee', price: '₹1,100' },
                      { name: 'Fitness Certificate Fee', desc: 'Commercial vehicle fitness', price: '₹1,100' },
                      { name: 'Permit Fee Challan', desc: 'Bus/truck permit', price: '₹2,200' },
                      { name: 'RC Transfer Fee', desc: 'Gaadi ka naam transfer', price: '₹1,650' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#4F46E5', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7 Health Department */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(180,83,9,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-health')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#B45309'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #B45309, #D97706)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-hospital"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>7. Health Department</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'Hospital Fee Challan', desc: 'Govt hospital mein fee', price: '₹110' },
                      { name: 'Lab Test Fee', desc: 'Sarkari lab test', price: '₹330' },
                      { name: 'Medical Certificate Fee', desc: 'Govt doctor certificate', price: '₹220' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#B45309', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8 GST & Tax */}
            <div className="fade-in appear" style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(31,41,55,0.1)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => openModal('challan-gst')} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#1F2937'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#E2E8F0'; }}>
              <div style={{ background: 'linear-gradient(135deg, #1F2937, #374151)', color: 'white', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-file-invoice-dollar"></i></div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>8. GST & Tax</h3>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>View Docs <i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'GST Challan (PMT-06)', desc: 'GST payment ke liye', price: '₹1,100' },
                      { name: 'Income Tax Challan (280)', desc: 'Income tax payment', price: '₹2,200' },
                      { name: 'TDS Challan (281)', desc: 'TDS deposit', price: '₹1,100' },
                      { name: 'Professional Tax', desc: 'Vyavsayik kar', price: '₹2,200' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}<div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 'normal' }}>{item.desc}</div></td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#1F2937', fontWeight: 'bold' }}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 9 e-Mitra Specific Challans */}
            <div className="fade-in appear" style={{ background: 'white', border: '2px dashed #DC2626', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(220,38,38,0.1)', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ background: '#FEF2F2', color: '#DC2626', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #FEE2E2' }}>
                <div style={{ width: '45px', height: '45px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 2px 4px rgba(220,38,38,0.1)' }}><i className="fa-solid fa-star"></i></div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>9. e-Mitra Specific</h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginTop: '4px' }}>Jo Aap Le Sakte Ho ⭐</div>
                </div>
              </div>
              <div style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { name: 'SSO Rajasthan Challans', desc: 'sso.rajasthan.gov.in' },
                      { name: 'Traffic Challan Payment', desc: 'echallan.parivahan.gov.in' },
                      { name: 'Rajasthan Revenue Challan', desc: 'igrs.rajasthan.gov.in' },
                      { name: 'Court Fee Challan', desc: 'eCourt portal' },
                      { name: 'Electricity Bill', desc: 'AVVNL/JVVNL portal' },
                      { name: 'Water Bill', desc: 'PHED portal' },
                      { name: 'Municipal Tax', desc: 'Urban local bodies portal' }
                    ].map((item, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '0.75rem 1.5rem', color: '#1E293B', fontWeight: 600 }}>{item.name}</td>
                        <td style={{ padding: '0.75rem 1.5rem', textAlign: 'right', color: '#64748B' }}><code>{item.desc}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REACT MODAL COMPONENT */}
      {activeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(5px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', animation: 'fadeIn 0.2s ease-out' }} onClick={closeModal}>
          <div style={{ background: 'white', borderRadius: '24px', width: '100%', maxWidth: '600px', maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', animation: 'slideUp 0.3s ease-out' }} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div style={{ background: 'linear-gradient(135deg, #F8FAFC, #F1F5F9)', padding: '1.5rem 2rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#1A56DB', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <i className={`fa-solid ${activeModal.icon}`}></i>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.4rem', color: '#1E293B', margin: '0 0 5px 0' }}>{activeModal.title}</h2>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FEF2F2', color: '#EF4444', padding: '4px 10px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                    <i className="fa-solid fa-indian-rupee-sign"></i> Price: {activeModal.price === 'Actual Amount + 10% Service Charge' ? 'Amount + 10%' : activeModal.price}
                  </div>
                </div>
              </div>
              <button onClick={closeModal} style={{ background: 'white', border: '1px solid #E2E8F0', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', transition: 'all 0.2s', position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            {/* Modal Body (Documents) */}
            <div style={{ padding: '2rem', overflowY: 'auto' }}>
              <div dangerouslySetInnerHTML={{ __html: activeModal.documents }}></div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '1.5rem 2rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={closeModal} style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #CBD5E1', background: 'white', color: '#475569', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
              <a href="/contact" style={{ padding: '10px 24px', borderRadius: '10px', border: 'none', background: '#1A56DB', color: 'white', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa-solid fa-phone"></i> Contact Us
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
